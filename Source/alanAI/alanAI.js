var alanBtnInstance = alanBtn({
  key: "94d46d3b652479d0b1f502962c300f902e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    //My code starts
    let myCommand = Object.values(commandData)[0];
    console.log("===========>Command: " + myCommand);
    switch (myCommand) {
      // Navigation
      case "Going to home page":
        window.location.href = "index.html";
        break;
      case "Going back":
        window.history.back();
        break;
      case "Going forward":
        window.history.forward();
        break;
      case "Mute":
        alanBtnInstance.deactivate();
        break;
      case "Reload":
        window.location.href = window.location.href;
        break;
      case "Programs":
        window.location.href = "index.html#programs";
        const card = document.querySelector(".program__card");

        function addGlow() {
          card.classList.add("glow");
          setTimeout(removeGlow, 5000); // Remove glow after 5 seconds
        }

        function removeGlow() {
          card.classList.remove("glow");
        }

        card.addEventListener("click", addGlow); // Add glow when the card is clicked

        // Apply styles for the .program__card class
        const style1 = document.createElement("style");
        style1.innerHTML = `
          .program__card {
            transition: box-shadow 0.3s ease-in-out;
          }
      
          .program__card.glow {
            box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #33ccff,
              0 0 40px #33ccff, 0 0 70px #33ccff, 0 0 80px #33ccff,
              0 0 100px #33ccff;
            animation: glow 5s forwards;
            animation-delay: 2s;
          }
      
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #33ccff,
                0 0 40px #33ccff, 0 0 70px #33ccff, 0 0 80px #33ccff,
                0 0 100px #33ccff;
            }
            100% {
              box-shadow: none;
            }
          }
        `;
        document.head.appendChild(style1);
        break;
      case "Pricing":
        window.location.href = "index.html#pricing";
        const style2 = document.createElement("style");
        style2.innerHTML = `
          .pricing__card {
            transition: box-shadow 0.3s ease-in-out;
          }
      
          .pricing__card.glow {
            box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #33ccff,
              0 0 40px #33ccff, 0 0 70px #33ccff, 0 0 80px #33ccff,
              0 0 100px #33ccff;
            animation: glow 5s forwards;
            animation-delay: 2s;
          }
      
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #33ccff,
                0 0 40px #33ccff, 0 0 70px #33ccff, 0 0 80px #33ccff,
                0 0 100px #33ccff;
            }
            100% {
              box-shadow: none;
            }
          }
        `;
        document.head.appendChild(style2);
        break;
      // Display the workout cards
      case "Go to flex muscle":
        window.location.href = "flex.html";
        pushImgNo(0);
        break;
      case "Go to cardio exercise":
        window.location.href = "flex.html";
        pushImgNo(5);
        break;
      case "Go to shoulder workouts":
        window.location.href = "flex.html";
        pushImgNo(10);
        break;
      case "Go to weight lifting":
        window.location.href = "flex.html";
        pushImgNo(15);
        break;
      case "Go to personal training":
        window.location.href = "trainer.html";
        break;
      // Open workout cards
      case "First Card":
        window.location.href = "workout.html";
        wrkOutNo(0);
        break;
      case "Second Card":
        window.location.href = "workout.html";
        wrkOutNo(1);
        break;
      case "Third Card":
        window.location.href = "workout.html";
        wrkOutNo(2);
        break;
      case "Fourth Card":
        window.location.href = "workout.html";
        wrkOutNo(3);
        break;
      case "Fifth Card":
        window.location.href = "workout.html";
        wrkOutNo(4);
        break;
      // Fill the contact form
      case "getPhone":
        window.location.href = "index.html#contact-form";
        document.getElementById("contact-phone").value = Object.values(
          commandData
        )[1].replaceAll("-", "");
        break;
      case "getName":
        window.location.href = "index.html#contact-form";
        document.getElementById("contact-user").value =
          Object.values(commandData)[1];
        break;
      case "Send details":
        window.location.href = "index.html#contact-form";
        if (
          document.getElementById("contact-phone").value == "" ||
          document.getElementById("contact-user").value == ""
        ) {
          alanBtnInstance.playText("Please enter your name and phone number");
          document.getElementById("subscribeBtn").click();
        } else {
          document.getElementById("subscribeBtn").click();
          alanBtnInstance.playText("Thank you for contacting us");
        }
        break;
      // Fill the BMI form
      case "getHeight":
        window.location.href = "index.html#myBMIForm";
        document.getElementById("calculate-cm").value =
          Object.values(commandData)[1];
        break;
      case "getWeight":
        window.location.href = "index.html#myBMIForm";
        document.getElementById("calculate-kg").value =
          Object.values(commandData)[1];
        break;
      case "Calculating BMI":
        window.location.href = "index.html#myBMIForm";
        //document.getElementById("calculateBtn").click();
        if (
          document.getElementById("calculate-cm").value == "" ||
          document.getElementById("calculate-kg").value == ""
        ) {
          alanBtnInstance.playText("Please enter your height and weight");
          document.getElementById("calculateBtn").click();
        } else {
          document.getElementById("calculateBtn").click();
          alanBtnInstance.playText(
            "Your are " +
              document
                .getElementById("calculate-message")
                .innerHTML.split(" ")[7]
          );
        }
        break;
      case "Logout":
        logout();
        break;
      case "Basic package":
        window.location.href = "index.html#pricing";
        document.getElementById("basic package").click();
        break;
      case "Premium package":
        window.location.href = "index.html#pricing";
        document.getElementById("premium package").click();
        break;
      case "Diamond package":
        window.location.href = "index.html#pricing";
        document.getElementById("diamond package").click();
        break;
      default:
        console.log("===========>Unrecognized command: " + myCommand);
    }
    //My code ends
  },

  //  To activate the alan button by default
  // onButtonState: async function (status) {
  //   if (status === "ONLINE") {
  //     await alanBtnInstance.activate();
  //   }
  // },
  // rootEl: document.getElementById("alan-btn"),
});

// Event listener for media play pause button
var isPressed = false;
document.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();
  if (keyPressed === "mediaplaypause") {
    if (isPressed) {
      alanBtnInstance.deactivate();
      isPressed = false;
    } else {
      alanBtnInstance.activate();
      isPressed = true;
    }
  }
});

/* 
<========== HTML CODE ===============>
    <!-- Alan AI starts -->
    <div class="alan-btn"></div>
    <script
      type="text/javascript"
      src="https://studio.alan.app/web/lib/alan_lib.min.js"
    ></script>
    <script src="AlanAI/alanAI.js" type="text/javascript"></script>
    <!-- Alan AI ends -->
*/
