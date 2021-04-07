import { Button, Card, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

export default function Login() {
  return (
    <div style={{ marginLeft: 40, marginTop: 80 }}>
      <h1>Iniciar</h1>
      <input
        type="text"
        style={{ height: 30, fontSize: 20, marginRight: 2 }}
      ></input>
      <button style={{ height: 40, fontSize: 20 }}>
        <Link to="/Home" style={{ color: "black", textDecoration: "none" }}>
          Entrar
        </Link>
      </button>
    </div>
  );
}

/*<Container>
      <Card style={{ width: "100%", height: "90vh" }}>
        <Typography style={{ textAlign: "center", fontSize: 30 }}>
          Iniciar
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: 20,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Correo"
            style={{ marginBottom: 10 }}
          />
          <Button style={{ width: 80 }} variant="contained" color="primary">
            <Link to="/Home" style={{ color: "white", textDecoration: "none" }}>
              Entrar
            </Link>
          </Button>
        </div>
      </Card>
    </Container>*/
