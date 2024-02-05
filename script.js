document.addEventListener('DOMContentLoaded', () => {
    const positionListItems = document.querySelectorAll('.position-list li');
    const detailDivs = document.querySelectorAll('.detail');
  
    positionListItems.forEach(item => {
      item.addEventListener('click', () => {
        // Hide all detail divs
        detailDivs.forEach(detail => {
          detail.style.display = 'none';
        });
  
        // Show the clicked item's detail div
        const targetId = item.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        targetDiv.style.display = 'block';
      });
    });
  });