const createTokenUser = (user) => {
  return {
    name: user.name,
    userId: user._id,
    role: user.role,
    email: user.email,
    organizer: user.organizer,
  };
};

const createTokenParticipant = (participant) => {
  return {
    firtName: participant.firstName,
    lastName: participant.lastName,
    participantId: participant._id,
    email: participant.email,
  };
};

module.exports = { createTokenUser, createTokenParticipant };
