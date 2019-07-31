
export const timestamp = {
  // nanoseconds have to fit in 64 bits.
  maxMilliseconds: Math.floor((Math.pow(2, 64) - 1) * 0.001)
};

export const varchar = {
  maxLengthFor8Bits: 255,
  maxLengthFor32Bits: 4294967295
};



