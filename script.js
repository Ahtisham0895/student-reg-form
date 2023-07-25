document.addEventListener("DOMContentLoaded", function () {
const enrollBtn = document.getElementById("enroll-btn");
const clearBtn = document.getElementById("clear-btn");
const form = document.getElementById("registration-form");
const output = document.getElementById("output");
  
enrollBtn.addEventListener("click", function () {
const formData = new FormData(form);
const data = {};
formData.forEach((value, key) => {
  if (data[key] !== undefined) {
    if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
    }
    data[key].push(value);
    } else {
    data[key] = value;
    }
});
  
    displayDataInTable(data);
});
  
clearBtn.addEventListener("click", function () {
    form.reset();
    output.innerHTML = "";
});
  
function displayDataInTable(data) {
    let html = `
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
      `;
  
for (const key in data) {
    html += `
        <tr>
            <td><strong>${key}</strong></td>
            <td>${Array.isArray(data[key]) ? data[key].join(", ") : data[key]}</td>
        </tr>
    `;
}
    html += "</table>";
    output.innerHTML = html;
    }
});

