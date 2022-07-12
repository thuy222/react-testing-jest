const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Ho",
          last: "Thuy",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
