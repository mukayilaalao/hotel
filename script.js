let divOffer=document.querySelector("#offer");

function timing(today) {
    let dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthArr=["January","February","Mars","April","May","June","Jully","August","September","October","November","December"];
    let timeObj=new Date(today.getTime()+7*24*60*60*1000);
    let expDay=dayArr[timeObj.getDay()];
    let expYear= timeObj.getFullYear();
    let expDate= timeObj.getDate();
    let expMonth= monthArr[timeObj.getMonth()];
    return `${expDay} (${expDate} ${expMonth} ${expYear})`;
}
let today=new Date();
let newContent= timing(today);
divOffer.textContent += " "+newContent;