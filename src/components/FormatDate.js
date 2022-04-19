const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const FormatDate = strDate => {
  const d = new Date(strDate.slice(0, strDate.indexOf('T')));
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
   
};

export default FormatDate;