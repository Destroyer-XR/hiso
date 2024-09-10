let liffId = ""
const queryString = window.location.search;

// สร้างออบเจ็กต์ URLSearchParams เพื่อเข้าถึง query parameters
const urlParams = new URLSearchParams(queryString);

// ดึงค่าพารามิเตอร์ 'id'
const id = urlParams.get('id');

// ตรวจสอบว่าถ้า id คือ 1
if (id === '1') {
    document.getElementById('homename').textContent = 'ระบบถอนบ้านโมโม่';
    liffId = "2006065768-K3bkjBOr"
} else if (id == '2'){
    document.getElementById('homename').textContent = 'ระบบถอนบ้านมามี้';
    liffId = "2006065768-eB6qW72D"
} else if (id == '3'){
    document.getElementById('homename').textContent = 'ระบบถอนบ้านไฮโซ';
    liffId = "2006065768-EGGb7Q5v"
} else if (id == '4'){
    document.getElementById('homename').textContent = 'ระบบถอนบ้านริชชี่';
    liffId = "2006065768-y323P0eo"
} else if (id == '5'){
    document.getElementById('homename').textContent = 'ระบบถอนบ้านดึ๋งดั่ง';
    liffId = "2006065768-W4g8Xq7R"
}

liff
  .init({
    liffId: liffId,
  })
  .then(() => {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
  })
  .catch((err) => {
    console.log(err.code, err.message);
  });

document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the values from the form fields
    const name = document.getElementById('name').value;
    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;
    console.log('Name:', name);
    console.log('Bank Name:', bankName);
    console.log('Account Number:', accountNumber);
    console.log('Amount:', amount);
    liff
    .sendMessages([
      {
        type: "text",
        text: `ถอน=${amount}/${name} ${bankName} ${accountNumber}`,
      },
    ])
    .then(() => {
      console.log("message sent");
      liff.closeWindow();
    })
    .catch((err) => {
      console.log("error", err);
    });
});
