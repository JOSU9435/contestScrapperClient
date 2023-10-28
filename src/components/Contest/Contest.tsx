import "./Contest.scss";
import * as Interfaces from "../../global/interface" 

const Contest = ({contest}: {contest: Interfaces.Contest.Contest}) => {
  const {name, platform, contestUrl, startTime} = contest;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const formatDate = (time: string) : string => {
    const date = new Date(time);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }

  const platforms = {
    codeforces: "/codeforces.png",
    atcoder: "/atcoder.svg",
  }
  
  return (  
    <a className="contest-card" href={contestUrl} target="_blank" rel="norefferer">
      <div id="name">{name}</div>
      <div id="platform">
        <img src={platforms[platform as keyof typeof platforms]} alt={platform} />
      </div>
      <div id="date">{startTime ? formatDate(startTime) : "---"}</div>
    </a>
  );
}
 
export default Contest;