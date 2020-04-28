const tableCell = document.querySelectorAll('.table-cell');
const tableTimesPosition = document.querySelector('.table-flex__inner');
const tableCellsPosition = document.querySelector('.table-cells__flex-inner');

var viewModel = {

	fillinBlue: function () {
		tableCell.forEach(function (item) {
			item.classList.add('active');
		})
	},

	clearBlue: function () {
		tableCell.forEach(function (item) {
			item.classList.remove('active');
		})
	},

	highlight: function () {
		tableCell.forEach(function (elem) {
			elem.addEventListener('click', function () {
				elem.classList.toggle('active');
			})
		})
	},

	timer: ko.observable('')
};

ko.applyBindings(viewModel);

viewModel.timer.subscribe(function (value) {

	switch (value) {
		case '1':
			tableTimesPosition.style.left = '0' + "px";
			tableCellsPosition.style.left = '0' + 'px';
			break;
		case '3':
			tableTimesPosition.style.left = '-68' + "px";
			tableCellsPosition.style.left = '-68' + 'px';
			break;
		case '5':
			tableTimesPosition.style.left = '-136' + "px";
			tableCellsPosition.style.left = '-136' + "px";
			break;
		case '7':
			tableTimesPosition.style.left = '-204' + "px";
			tableCellsPosition.style.left = '-204' + "px";
			break;
		case '9':
			tableTimesPosition.style.left = '-272' + "px";
			tableCellsPosition.style.left = '-272' + "px";
			break;
		case '11':
			tableTimesPosition.style.left = '-340' + "px";
			tableCellsPosition.style.left = '-340' + "px";
			break;
		case '13':
			tableTimesPosition.style.left = '-408' + "px";
			tableCellsPosition.style.left = '-408' + "px";
			break;
		case '15':
			tableTimesPosition.style.left = '-476' + "px";
			tableCellsPosition.style.left = '-476' + "px";
			break;
		case '17':
			tableTimesPosition.style.left = '-544' + "px";
			tableCellsPosition.style.left = '-544' + "px";
			break;
		case '19':
			tableTimesPosition.style.left = '-612' + "px";
			tableCellsPosition.style.left = '-612' + "px";
			break;
		case '21':
			tableTimesPosition.style.left = '-680' + "px";
			tableCellsPosition.style.left = '-680' + "px";
			break;
		case '23':
			tableTimesPosition.style.left = '-748' + "px";
			tableCellsPosition.style.left = '-748' + "px";
			break;
		default:
			tableTimesPosition.style.left = '0' + "px";
			tableCellsPosition.style.left = '0' + "px";
			break;
	}
});
