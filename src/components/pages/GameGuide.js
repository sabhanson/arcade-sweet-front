import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { style } from "@mui/system";

const styles = {
  button: {
    padding: "3px",
    // fontFamily: "cursive",
    background: "#F46036",
    color: "white",
    borderRadius: "7px",
    margin: "10px",
  },
  gameDiv: {
    background: "#1B998B",
    border: "5px double white",
    margin: "50px",
    borderRadius: "15px",
    boxShadow: "0px 0px 20px black",
  },
  h2: {
    color: "white",
    textShadow: "2px 2px 3px #f46036",
    padding: "10px",
  },
  p: {
    background: "white",
    borderRadius: "15px",
    padding: "30px",
    border: "2px solid #2e294e",
  },
};

export function GameGuide() {
  return (
    <div className="row d-flex justify-content-center">
      <div>
        <a href="#card">
          <button style={styles.button}>Card-Matching</button>
        </a>
        <a href="#card">
          <button style={styles.button} href="#wordle">
            Wordle
          </button>
        </a>
        <a href="#card">
          <button style={styles.button} href="#snake">
            Snake
          </button>
        </a>
      </div>
      <div id="card" className="col-7" style={styles.gameDiv}>
        <h2 style={styles.h2}>Card-Matching</h2>
        <div>
          <p style={styles.p}>
            how to play card matching... "At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat."
          </p>
        </div>
      </div>
      <div id="wordle" className="col-7" style={styles.gameDiv}>
        <h2 style={styles.h2}>Wordle</h2>
        <div>
          <p style={styles.p}>
            how to play wordle... "At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat."
          </p>
        </div>
      </div>
      <div id="snake" className="col-7" style={styles.gameDiv}>
        <h2 style={styles.h2}>Snake</h2>
        <div>
          <p style={styles.p}>
            how to play snake... "At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat."
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameGuide;
