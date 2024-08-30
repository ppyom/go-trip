import './TotalCount.css';

const TotalCount = ({ count }) => {
  return (
    <div className="TotalCount mw">
      <p>
        Total <span className="count">{count}</span>
      </p>
    </div>
  );
};

export default TotalCount;
