const Paginate = React.createClass({
  handlePageClick(e) {
    e.preventDefault();
    const targetText = e.target.text;
    if (targetText == 'Previous') {
      this.props.onPageChange(this.props.page - 1);
    } else if (targetText == 'Next') {
      this.props.onPageChange(this.props.page + 1);
    } else {
      this.props.onPageChange(parseInt(targetText));
    }
  },

  render() {
    const perPage = this.props.perPage || 10;
    const page = this.props.page;
    const total = this.props.total;

    let numPages = parseInt(total/perPage);
    if (total % perPage != 0) {
      numPages++;
    }

    let pagerEl = [];
    for (var i = 1; i <= numPages; i++) {
      pagerEl.push(
        page == i ? (
          <li key={i} className='current'>{i}</li>
        ) : (
          <li key={i}><a href='#' aria-label={`Page ${i}`} onClick={this.handlePageClick}>{i}</a></li>
        )
      );
    }

    const prevEl = page == 1 ? (
      <li className='pagination-previous disabled'>Previous</li>
    ) : (
      <li className='pagination-previous'>
        <a href='#' aria-label='Previous page' onClick={this.handlePageClick}>Previous</a>
      </li>
    )

    const nextEl = page == numPages ? (
      <li className='pagination-next disabled'>Next</li>
    ) : (
      <li className='pagination-next'>
        <a href='#' aria-label='Next page' onClick={this.handlePageClick}>Next</a>
      </li>
    )

    return (
      <div>
        <ul className='pagination text-right' role='navigation' aria-label='Pagination'>
          {prevEl}
          {pagerEl}
          {nextEl}
        </ul>
      </div>
    )
  }
});
