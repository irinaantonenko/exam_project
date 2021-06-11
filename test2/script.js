document.body.addEventListener("keydown", keyPress);
 
        function keyPress(e) {
            if ((e.code === "KeyS" || e.code === "KeyE") && e.ctrlKey) {
                e.preventDefault();
                let el = document.querySelector("hr").nextElementSibling;
                if (e.code === "KeyS" && el.nodeName === "TEXTAREA") {
                    let newEl = document.createElement("div");
                    newEl.textContent = el.value; // Исправил
                    el.replaceWith(newEl);
                }
                else if (e.code === "KeyE" && el.nodeName === "DIV") {
                    let newEl = document.createElement("textarea");
                    newEl.textContent = el.textContent;
                    el.replaceWith(newEl);
                }
            }
        }