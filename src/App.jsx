import "./App.css";

function App() {
  //https://media.discordapp.net/attachments/1209924810721861672/1229294744316936263/qua_nhieu_cua.gif?ex=66289172&is=66273ff2&hm=35ad972a79c351b1ed5d8c1234fda46a380d3472506a1133558ad29a5440bfa1&
  return (
    <>
      <div>
        <form>
          <input placeholder="Nhập tier của bạn" />
          <input placeholder="Nhập giá $IO" />
          <input type="submit" value="Kiểm tra tài sản" />
        </form>
        <img
          src={
            "https://cdn.discordapp.com/attachments/1224373971580096574/1230892892097220628/cua_day_dem_di.gif?ex=66291bd6&is=6627ca56&hm=f2ae4a60712503ed4d611918d8e292a04ba7272cfd7cd6eb48533edaa3d97bd1&"
          }
        />
      </div>
    </>
  );
}

export default App;
