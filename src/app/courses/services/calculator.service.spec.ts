import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two number", () => {
    //setup
    const logger = jasmine.createSpyObj("LoggerService", ["log"]);
    const calculator = new CalculatorService(logger);
    //execution
    const result = calculator.add(2, 2);
    //test
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two number", () => {
    //setup
    const logger = new LoggerService();
    spyOn(logger, "log");
    const calculator = new CalculatorService(logger);
    //execution
    const result = calculator.subtract(2, 2);
    //test
    expect(result).toBe(0, "unexpected subtraction result");
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
