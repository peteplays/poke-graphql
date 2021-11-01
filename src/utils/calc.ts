const getMean = (vals: number[]) => {
  const count = vals.length;
  const total = vals.reduce((a, b) => a + b, 0);

  return total / count;
}

const getMedian = (vals: number[]) => {
  const sorted = [...vals].sort((a, b) => a - b);
  const middle = (vals.length + 1) / 2;
  const middleHigh = sorted[middle - 0.5];
  const middleLow = sorted[middle - 1.5];
  const isEven = sorted.length % 2 === 0;

  switch (true) {
    case isEven && middleLow === middleHigh:
      return `${middleHigh}`;
    case isEven:
      return `${middleLow} - ${middleHigh}`;
    default:
      return `${sorted[middle - 1]}`;
  }
};

const getMode = (vals: number[]) => {
  const occurrenceCount = vals.reduce(
    (acc, cur) => {
      !acc[cur] ? (acc[cur] = 1) : (acc[cur] = acc[cur] + 1);

      if (acc.maxCount < acc[cur]) {
        acc.maxCount = acc[cur];
      }

      return acc;
    },
    { maxCount: 0 }
  );

  const { maxCount, ...occurrences } = occurrenceCount;

  return Object.entries(occurrences)
    .reduce((acc, [val, count]) => {
      if (count === maxCount) {
        acc.push(val);
      }

      return acc;
    }, [])
    .join(', ');
};


export { getMean, getMedian, getMode };
