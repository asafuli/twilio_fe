a small responsive CRA app that initially meant to act as a data source for a family trip to the Black forest and gradually got added with additional capabilities


  - Redux is used for state managment
  - Backend is implemented with Node and Mongo DB (source can be found in https://github.com/asafuli/twilio_whatsapp)
  - Chat is using Socket.io (Currently by default Chat messages from last 24 hours are loaded)

Makes use of Twillio whatsapp API, Users can add info to their list by sending whatsapp messages to a predefined number.
Lately I have done a bit of refactoring and threw React hooks into the midst as well, mostly for personal practice.  

An example can be seen in: https://the-black-forest-x-fe.herokuapp.com/user/5c0e6708d591362310de2b9f


