const iconTrigger = document.querySelector('#iconTrigger')
const arrow = document.querySelector('#arrow')
const sidebarMain = document.querySelector('.sidebar-main')

iconTrigger.addEventListener('click', () => {
  if (arrow.classList.contains('fa-arrow-right')) {
    /* Icon */
    arrow.classList.remove('fa-arrow-right')
    arrow.classList.add('fa-arrow-left')
    /* Sidebar */
    sidebarMain.classList.add('show')
    sidebarMain.classList.remove('hide')
  } else {
    /* Icon */
    arrow.classList.add('fa-arrow-right')
    arrow.classList.remove('fa-arrow-left')
    /* Sidebar */
    sidebarMain.classList.remove('show')
    sidebarMain.classList.add('hide')
  }
})