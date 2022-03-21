export default function Rating() {
  return (
    <>
      <form action="/rating-page/submit" className="form">
        <div className="ratings-row">
          <button type="button" value={1} name="rate" className="ratings">
            1
          </button>
          <button type="button" value={2} name="rate" className="ratings">
            2
          </button>
          <button type="button" value={3} name="rate" className="ratings">
            3
          </button>
          <button type="button" value={4} name="rate" className="ratings">
            4
          </button>
          <button type="button" value={5} name="rate" className="ratings">
            5
          </button>
        </div>

        <button className="submit" type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}
