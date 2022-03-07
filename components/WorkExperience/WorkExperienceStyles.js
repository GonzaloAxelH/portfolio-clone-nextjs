import styled from "styled-components";
export const ListJobs = styled.div`
  .job {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }
  .pb {
    padding-bottom: 1em;
  }
  span {
    margin: 0 1em;
    flex: 3;
    width: 90%;
    border-bottom: 1px dashed ${({ theme }) => theme.colorBorder2};
  }
`;

export const Workexperience = styled.div``;
