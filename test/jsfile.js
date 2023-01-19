const btn = document.getElementById("btn");
const refreshElem = document.getElementById("refresh");
const resElem = document.getElementById("data");
const downloadElem = document.getElementById("download");

let text = "";
let res = "";

btn.addEventListener("change", async (e) => {
    let input = e.target;

    console.log(input);
    let reader = new FileReader();
    reader.onload = function () {
        text = String(reader.result);
        processData(text);
    };
    reader.readAsText(input.files[0]);
});

refreshElem.addEventListener("click", () => processData());
downloadElem.addEventListener("click", () => downloadFile());

const processData = () => {
    const data = text.split("\n");
    const split = data.map((s) => s.split("-"));
    split.map((s) => (Math.random() < 0.5 ? s : s.reverse()));
    const mixed = split.map((s) => s.join("\t"));

    res = mixed.join("\n");
    resElem.innerText = res;
};

const downloadFile = () => {
    const link = document.createElement("a");
    const file = new Blob([res], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "file.txt";
    link.click();
    URL.revokeObjectURL(link.href);
};
