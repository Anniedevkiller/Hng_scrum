import Progress from "@/shared/components/Progress";
import AuctionGoal from "@/shared/icons/AuctionGoal";
import thousandsSeperator from "@/shared/utilities/thousandsSeparator";

const ProgressBar = ({ raised, expected }: { raised: number; expected: number }) => {
  return (
    <Progress
      className="progress-primary bg-primary-100"
      maxWidth="623px"
      value={raised}
      total={expected}
      Label={({ percentage }) => <ProgressLabel percentage={percentage} />}
    >
      <div className="absolute top-3 -left-2 text-xl sm:text-base font-bold font-title black-1">
        Raised ${thousandsSeperator(raised)}
      </div>

      <div className="flex items-center gap-1 absolute top-3 -right-6 sm:right-0 text-xl sm:text-base font-bold font-title black-1">
        <AuctionGoal className="text-primary" /> ${thousandsSeperator(expected)}
      </div>
    </Progress>
  );
};

export default ProgressBar;

const ProgressLabel = ({ percentage }: { percentage: number }) => {
  let left = percentage - 2;
  if (left > 97) left = 97;

  return (
    <div className={`flex justify-center items-center text-primary absolute -top-7`} style={{ left: left + "%" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        width="37"
        height="38"
        viewBox="0 0 37 38"
        fill="none"
      >
        <path
          d="M12.6836 30.2899H6.90136C5.36781 30.2899 3.89707 29.6449 2.81269 28.4967C1.7283 27.3485 1.1191 25.7913 1.1191 24.1675V7.84115C1.1191 6.21739 1.7283 4.66013 2.81269 3.51196C3.89707 2.36379 5.36781 1.71875 6.90136 1.71875H30.0304C31.564 1.71875 33.0347 2.36379 34.1191 3.51196C35.2035 4.66013 35.8127 6.21739 35.8127 7.84115V24.1675C35.8127 25.7913 35.2035 27.3485 34.1191 28.4967C33.0347 29.6449 31.564 30.2899 30.0304 30.2899H24.2481L18.4659 36.4123L12.6836 30.2899Z"
          stroke="currentColor"
          strokeWidth="1.82598"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="-mt-1 text-xs font-title font-bold">{percentage}%</span>
    </div>
  );
};
