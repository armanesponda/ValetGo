const button= document.querySelector("button")

button.addEventListener("click, () => {
  Notification.requestPermission().then(perm => {
    if (perm === "granted) {
        new Notification("Alert", {
      body:"message here",
    })
                         }
                                        })
                                        })
