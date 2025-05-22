const localstorage = JSON.parse(localStorage.getItem("data"));

fetch("data.json")
.then(response => response.json())
.then(datax => {
    const data = localstorage || datax;
    document.getElementById("name").value = data.personal_information.name;
    document.getElementById("title").textContent = data.personal_information.title;
    document.getElementById("email").value = data.contact.email;
    document.getElementById("nomre").value = data.contact.phone;
    document.getElementById("yer").value = data.contact.location;
    document.getElementById("instagram").textContent = data.social_media[0].username;
    document.getElementById("tiktok").textContent = data.social_media[1].username;
    document.getElementById("github").textContent = data.social_media[2].username;

    document.getElementById("təhsil").innerHTML = data.education.map(item => `<p><strong>${item.period}</strong><br> ${item.institution}</p>`).join("");

    document.getElementById("bacariqlar").innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");

    document.getElementById("iş-tecrübəsi").innerHTML = data.work_experience.map(exp => `<p><strong>${exp.title}</strong><br> ${exp.description}</p>`).join("");

    document.getElementById("dillər").innerHTML = data.languages.map(lang => `<li>${lang}</li>`).join("");
    document.getElementById("proyektlər").innerHTML = data.projects.map(lang => `<p><strong>${lang.title}</strong><br> ${lang.description}</p>`).join("");
    document.getElementById("sertifikalar").innerHTML = data.certifications.map(lang => `<p><strong>${lang.title}</strong><br> ${lang.description}</p>`).join("");
    document.getElementById("referans").innerHTML = `<p><strong>${data.reference.name}</strong><br> ${data.reference.description}</p>`;
    document.getElementById("profile-info").innerHTML = `<p>${data.profile_summary}</p><button id="profile-edit">Edit</button>`;

    document.getElementById("bacariq-elave-et").addEventListener("click", () => {
    const skill = prompt("Bacarıqlarınızı daxil edin:");
    if (skill) {
        document.getElementById("bacariqlar").innerHTML += `<li>${skill}</li>`;
        data.skills.push(skill);
        localStorage.setItem("data", JSON.stringify(data));
      }
  });

  document.getElementById("dil-elave-et").addEventListener("click", () => {
      const language = prompt("Dilləri daxil edin:");
      if (language) {
          document.getElementById("dillər").innerHTML += `<li>${language}</li>`;
          data.languages.push(language);
          localStorage.setItem("data", JSON.stringify(data));
      }
  });

  document.getElementById("profile-edit").addEventListener("click", () => {
    const profile_summary = prompt("Profile summary:");
    if (profile_summary) {
        document.getElementById("profile-info").innerHTML = `<p>${profile_summary}</p><button id="profile-edit">Edit</button>`;
        data.profile_summary = profile_summary;
        localStorage.setItem("data", JSON.stringify(data));
    }
});

  document.getElementById("instagram-edit").addEventListener("click", () => {
    const username = prompt("Instagram username:");
    if (username) {
        document.getElementById("instagram").textContent = username;
        data.social_media[0].username = username;
        localStorage.setItem("data", JSON.stringify(data));
    }
});

  document.getElementById("tiktok-edit").addEventListener("click", () => {
    const username = prompt("TikTok username:");
    if (username) {
        document.getElementById("tiktok").textContent = username;
        data.social_media[1].username = username;
        localStorage.setItem("data", JSON.stringify(data));
    }
});

  document.getElementById("github-edit").addEventListener("click", () => {
    const username = prompt("GitHub username:");
    if (username) {
        document.getElementById("github").textContent = username;
        data.social_media[2].username = username;
        localStorage.setItem("data", JSON.stringify(data));
    }
});

  document.getElementById("reset-default").addEventListener("click", () => {
    localStorage.removeItem("data");
    location.reload();
});

  document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("nomre").value;
      const location = document.getElementById("yer").value;
      data.contact.name = name;
      data.contact.email = email;
      data.contact.phone = phone;
      data.contact.location = location;
      localStorage.setItem("data", JSON.stringify(data));
  });
});
