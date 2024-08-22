liff
  .init({
    liffId: "2006065768-K3bkjBOr",
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
