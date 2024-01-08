document.addEventListener("DOMContentLoaded", function() {
  const adminList = document.getElementById("adminList");
  
  // Daftar admin beserta nomor WhatsApp
  const admins = [
      { name: "Admin 1", whatsapp: "+62 082280604622" },
      { name: "Admin 2", whatsapp: "+62 087849010567" },
      { name: "Admin 3", whatsapp: "+62 087810842750" },
      { name: "Admin 4", whatsapp: "+62 087890165629" },
      { name: "Admin 5", whatsapp: "+62 087865777731" }
  ];

  // Tambahkan daftar admin ke halaman
  admins.forEach(admin => {
      const listItem = document.createElement("li");
      const whatsappLink = document.createElement("a");
      whatsappLink.href = `whatsapp://send?phone=${admin.whatsapp}`;
      whatsappLink.textContent = `${admin.name}: ${admin.whatsapp}`;
      whatsappLink.target = "_blank"; // Buka tautan dalam tab/baru
      listItem.appendChild(whatsappLink);
      adminList.appendChild(listItem);
  });
});
