import { createContext } from "react";

const UserContext = createContext({
    user: {
        fName: "Deepak",
        email: 'dummy@dummy.com',
        number: '8888888888'
    }
})

export default UserContext