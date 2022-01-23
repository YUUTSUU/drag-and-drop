import {useState, useEffect} from 'react';
import {MDCCircularProgress} from '@material/circular-progress'

export const CircularProgress = ({size, determinate, progress}) => {
  const [id] = useState(`mdc-circular-progress}`);
  const [circularProgress, setCircularProgress] = useState < MDCCircularProgress > (null);

  useEffect(() => {
    const circularProgress = new MDCCircularProgress(document.getElementById(id));
    circularProgress.determinate = determinate;
    circularProgress.progress = progress;
    setCircularProgress(circularProgress);

    return () => {
      circularProgress.destroy();
    };
  }, []);

  useEffect(() => {
    if (circularProgress !== null) {
      circularProgress.progress = progress;
    }
  }, [progress]);

  if (!size || size === "small") {
    return (
      <div
        id={id}
        className="mdc-circular-progress"
        style={{width: 24, height: 24}}
        role="progressbar"
        aria-label="Progress Bar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={progress}
      >
        <div className="mdc-circular-progress__determinate-container">
          <svg className="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle className="mdc-circular-progress__determinate-track" cx="12" cy="12" r="8.75" strokeWidth="2.5" />
            <circle className="mdc-circular-progress__determinate-circle" cx="12" cy="12" r="8.75" strokeDasharray="54.978" strokeDashoffset="54.978" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="mdc-circular-progress__indeterminate-container">
          <div className="mdc-circular-progress__spinner-layer">
            <div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8.75" strokeDasharray="54.978" strokeDashoffset="27.489" strokeWidth="2.5" />
              </svg>
            </div><div className="mdc-circular-progress__gap-patch">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8.75" strokeDasharray="54.978" strokeDashoffset="27.489" strokeWidth="2" />
              </svg>
            </div><div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8.75" strokeDasharray="54.978" strokeDashoffset="27.489" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else if (size === "medium") {
    return (
      <div
        id={id}
        className="mdc-circular-progress"
        style={{width: 36, height: 36}}
        role="progressbar"
        aria-label="Progress Bar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={progress}
      >
        <div className="mdc-circular-progress__determinate-container">
          <svg className="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle className="mdc-circular-progress__determinate-track" cx="16" cy="16" r="12.5" strokeWidth="3" />
            <circle className="mdc-circular-progress__determinate-circle" cx="16" cy="16" r="12.5" strokeDasharray="78.54" strokeDashoffset="78.54" strokeWidth="3" />
          </svg>
        </div>
        <div className="mdc-circular-progress__indeterminate-container">
          <div className="mdc-circular-progress__spinner-layer">
            <div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12.5" strokeDasharray="78.54" strokeDashoffset="39.27" strokeWidth="3" />
              </svg>
            </div><div className="mdc-circular-progress__gap-patch">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12.5" strokeDasharray="78.54" strokeDashoffset="39.27" strokeWidth="2.4" />
              </svg>
            </div><div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12.5" strokeDasharray="78.54" strokeDashoffset="39.27" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else if (size === "large") {
    return (
      <div
        id={id}
        className="mdc-circular-progress"
        style={{width: 48, height: 48}}
        role="progressbar"
        aria-label="Progress Bar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={progress}
      >
        <div className="mdc-circular-progress__determinate-container">
          <svg className="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle className="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" strokeWidth="4" />
            <circle className="mdc-circular-progress__determinate-circle" cx="24" cy="24" r="18" strokeDasharray="113.097" strokeDashoffset="113.097" strokeWidth="4" />
          </svg>
        </div>
        <div className="mdc-circular-progress__indeterminate-container">
          <div className="mdc-circular-progress__spinner-layer">
            <div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" strokeDasharray="113.097" strokeDashoffset="56.549" strokeWidth="4" />
              </svg>
            </div><div className="mdc-circular-progress__gap-patch">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" strokeDasharray="113.097" strokeDashoffset="56.549" strokeWidth="3.2" />
              </svg>
            </div><div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
              <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" strokeDasharray="113.097" strokeDashoffset="56.549" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}