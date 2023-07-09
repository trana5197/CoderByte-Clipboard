const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the partition key if it exists", () => {
    const event = { partitionKey: "abc" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });

  it("should generate the partition key if it doesn't exist", () => {
    const event = { data: "test" };
    const expectedKey = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedKey);
  });

  it("should generate a hash if the partition key exceeds the maximum length", () => {
    const longKey = "a".repeat(MAX_PARTITION_KEY_LENGTH + 1);
    const expectedKey = crypto
      .createHash("sha3-512")
      .update(longKey)
      .digest("hex");
    const result = deterministicPartitionKey({ partitionKey: longKey });
    expect(result).toBe(expectedKey);
  });

  it("should handle non-string partition keys by stringifying them", () => {
    const event = { partitionKey: { key: "value" } };
    const expectedKey = JSON.stringify(event.partitionKey);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedKey);
  });
});
