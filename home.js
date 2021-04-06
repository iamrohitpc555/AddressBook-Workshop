window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
  });

  const createInnerHtml = () => {
    const headerHtml = ` 
      <th>Name</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      
    `;
    let contactList = createContactJSON();
    if(contactList.length == 0) return;
    document.querySelector(".person-count").textContent = contactList.length;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._name}</td>
        <td>${contactData._phone}</td>
        <td>${contactData._email}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>     
        <td>
        <img name="${contactData._id}" onclick="remove(this)" alt="delete" 
                src="../assets/icons/delete-black-18dp.svg">
        <img name="${contactData._id}" alt="edit" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const createContactJSON = () => {
    let contactListLocal = [
    {
        _name: "Rohit Chaudhari",
        _address: "Lane No 102",
        _city: "Dhule",
        _email: "rohit@gmail.com",
        _phone: "123456789",
        _state: "Maharashtra",
        _zip: "424001",
    },
    {
        _name: "ABC BCD",
        _address: "Nashik road",
        _city: "Nashik",
        _email: "abc@gmail.com",
        _phone: "123456789",
        _state: "Maharashtra",
        _zip: "424242",
    }
    ];
    return contactListLocal;
  }
