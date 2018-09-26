
window.drift.on("emailCapture", function (a) {
    console.log("user identified as: " + a.data.email);
    drift.api.setUserAttributes({
      email: 'abcd@example.com',
      nickname: 'John Doe',
      age: 21
    })
    })
    });