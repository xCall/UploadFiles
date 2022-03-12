class Routes {
  #io
  constructor(io) {
    this.#io = io;
  }

  async post(request, response) {
    const {header} = request;
    const onFinish = (response, redirectTo) => {
      response.writeHead(303, {
        Connection: 'close',
        Location: `${redirectTo}`,
      });

      response.end();
    }

    return onFinish(response, header.origin);
  }
}

module.exports = Routes;