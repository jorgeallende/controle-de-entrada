import { gql, useQuery } from "@apollo/client";
import React from "react";
import LoginBox from "../components/LoginBox";
import { useState } from "react";
import Menu from "../components/Menu";

const GET_EMPREGADOS_QUERRY = gql`
  query MyQuery{
    empregados(stage: DRAFT) {
      id
      empName
      login
      senha
      unitNumber
      cargo
    }
  }
`;

const Login = () => {
    const { data } = useQuery(GET_EMPREGADOS_QUERRY);
    const [logged, setLogged] = useState(false);
    const [userLevel, setUserLevel] = useState('');
    const [user, setUser] = useState({});
    console.log(data);

    return (
        <div className="flex items-center justify-center h-[100vh]">
            {
                logged
                    ? <Menu
                        cargo={userLevel}
                        user={user}
                        logged={setLogged}
                    />
                    : <LoginBox
                        data={data}
                        callback={setLogged}
                        userLevel={setUserLevel}
                        setUser={setUser}
                    />
            }
        </div>
    );
};

export default Login;
