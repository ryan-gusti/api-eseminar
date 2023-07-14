const Order = require("../../api/v1/orders/model");

const getAllOrders = async (req) => {
  const { limit = 10, page = 1, startDate, endDate } = req.query;

  let condition = {};

  if (req.user.role !== "owner") {
    condition = { ...condition, "historyEvent.organizer": req.user.organizer };
  }

  console.log(req.user.organizer);

  if (startDate && endDate) {
    const start = new Date(startDate);
    start.setHours(0, 0, 0);
    const end = new Date(endDate);
    end.setHours(23, 59, 59);
    condition = {
      ...condition,
      date: {
        $gte: start,
        $lt: end,
      },
    };
  }

  const result = await Order.find(condition)
    .limit(limit)
    .skip(limit * (page - 1));

  const count = await Order.countDocuments(condition);
  // console.log(typeof);
  // let order = {};
  // for (let i = 0; i < count; i++) {
  //   console.log(i);
  //   if (result[i]["event"] !== null) {
  //     Object.assign(order, result[i]);
  //   }
  // }
  // if (result[0]["event"] === null) {
  //   return { data: "wakwak" };
  // }
  //console.log(result[0]["event"]);
  // console.log(order);
  return { data: result, pages: Math.ceil(count / limit), total: count };
};

module.exports = { getAllOrders };
