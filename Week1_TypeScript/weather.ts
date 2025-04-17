const getWeather = async () => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.76&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo");
    // APIから帰ってきたJSONデータを取得
    const data = await res.json();

    // timeが1週間の日付、temperatureのmaxが最高気温、minが最低気温
    const { time, temperature_2m_max, temperature_2m_min } = data.daily;

    console.log("1週間の東京の天気（最高/最低）");
    console.log("=".repeat(30));

    // テンプレートリテラルで書くと見やすい(`${変数名}`)
    for (let i = 0; i < time.length; i++) {
        console.log(`${time[i]}：最高 ${temperature_2m_max[i]}℃ / 最低 ${temperature_2m_min[i]}℃`);
    }
};

getWeather();
