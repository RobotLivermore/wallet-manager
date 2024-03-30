export function summarizeString(str: string) {
  if (str.length <= 12) {
    // 如果字符串长度不超过12个字符，直接返回原字符串
    return str;
  } else {
    // 提取前6个字符，和最后6个字符，并用省略号连接
    return `${str.slice(0, 6)}...${str.slice(-6)}`;
  }
}