import styled from "styled-components";
import { SalesTrend } from "./Salestrend";
import { AnalyticTrend } from "./Analytic";



export function ChartSection() {
  return (
    <Wrapper>
      <SalesTrend/>
      <div className="spacer" />
      <AnalyticTrend/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: calc(50vh - 80px);
  /* background-color: brown; */
  .spacer{
    width: 20px;
  }
`;
