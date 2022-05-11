Array.from(document.querySelectorAll("*[data-include]")).forEach(
  async (v, i) => {
    const include = v.dataset.include;
    let html = null;

    try {
      const response = await axios.get(include);
      console.log(response);
      html = response.data;
    } catch (e) {
      console.log(e);
    }

    if (html != null) {
      v.outerHTML = html;
    }

    //** header 검색란 클릭 이벤트 */
    const searchInput = document.querySelector("#search-input");
    searchInput.addEventListener("click", (e) => {
      //childeNode로 input이 없을때만 이벤트 실행
      if (!searchInput.contains(document.querySelector("input"))) {
        searchInput.classList.add("clicked");

        const inputBox = document.createElement("input");
        inputBox.setAttribute("type", "text");
        inputBox.setAttribute("placeholder", "통합검색");
        inputBox.classList.add("inputStyle");
        searchInput.appendChild(inputBox);

        //input 미입력상태로 검색버튼 클릭시 alert
        document.querySelector("#search").addEventListener("click", (e) => {
          console.log(inputBox.value);
          if (inputBox.value == "") {
            alert("검색어를 입력하세요");
            inputBox.focus();
          }
        });
      }
    });

    //** header sub-menu 드롭다운 */
    document.querySelectorAll(".nav2-item").forEach((v, i) => {
      v.addEventListener("mouseover", (e) => {
        const target = e.currentTarget.querySelector(".sub-menu");
        console.log(target);
        target.classList.add("active");
      });
      v.addEventListener("mouseout", (e) => {
        const target = e.currentTarget.querySelector(".sub-menu");
        target.classList.remove("active");
      });
    });
  }
); //final end
