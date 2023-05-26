const more=document.querySelector('#more')
      const dropdown=document.querySelector('.more-dropdown')
      console.log(more, dropdown)
      more.addEventListener('mouseover',()=>{
        dropdown.style.display='flex'
      })
      more.addEventListener('mouseout',()=>{
        dropdown.style.display='none'
      })
      dropdown.addEventListener('mouseover',()=>{
        dropdown.style.display='flex'
      })
      dropdown.addEventListener('mouseout',()=>{
        dropdown.style.display='none'
      })