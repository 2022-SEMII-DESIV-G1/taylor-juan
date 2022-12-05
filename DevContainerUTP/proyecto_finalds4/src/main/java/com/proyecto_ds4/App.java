package com.proyecto_ds4;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "HOLA MUNDO");
        post("/hello", (request, response) -> "HOLA DESDE EL POST");
    }
}
