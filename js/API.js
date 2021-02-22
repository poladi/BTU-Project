class API {
  baseUrl = "https://reqres.in/api";

  async fetchRequest(params, options = {}) {
    return fetch(`${this.baseUrl}${params.endpoint}`, options);
  }

  async login(email, password, callback) {
    const params = {
      endpoint: "/login",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    try {
      const res = await this.fetchRequest(params, options);
      const result = await res.json();

      return result;
    } catch (err) {
      console.error("[API.login]", err);
    }
  }
  register() {}

  testAPI() {
    console.log("API WORKS");
  }
}
window.API = new API();
