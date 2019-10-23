import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Youken: [

            {
          YoukenNO:0,category1: "専門科目", category2: "-", category3: "必修科目", group: "卒業論文",
          number: ["BC14908"], name: ["-"], group_min: 6, group_max: 6, group_sum: 0,
          category1_min: 6, category1_max: 6, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:1,category1: "専門科目", category2: "-", category3: "選択科目", group: "BC12群",
          number: ["BC12"], name: ["-"], group_min: 14, group_max: 24, group_sum: 0,
          category1_min: 30, category1_max: 30, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:2,category1: "専門科目", category2: "-", category3: "選択科目", group: "BC11,BC16,BE22群",
          number: ["BC11", "BC16", "BE22"], name: ["-"], group_min: 0, group_max: 10, group_sum: 0,
          category1_min: 30, category1_max: 30, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:3,category1: "専門科目", category2: "-", category3: "選択科目", group: "BC13群",
          number: ["BC13"], name: ["-"], group_min: 6, group_max: 6, group_sum: 0,
          category1_min: 30, category1_max: 30, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:4,category1: "専門科目", category2: "-", category3: "自由科目", group: "インターンシップ",
          number: ["BC14"], name: ["-"], group_min: 0, group_max: 4, group_sum: 0,
          category1_min: 17, category1_max: 44, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:5,category1: "専門科目", category2: "-", category3: "自由科目",
          group: "BC11,BC12,BC13,BC16,BE22",
          number: ["BC11", "BC12", "BC13", "BC16", "BE22"], name: ["-"], group_min: 17, group_max: 40, group_sum: 0,
          category1_min: 17, category1_max: 44, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },


        {
          YoukenNO:6,category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論I",
          number: ["BC50011"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:7,category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論II",
          number: ["BC50021"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:8,category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論III",
          number: ["BC50031"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:9,category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論IV",
          number: ["BC50041"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:10,category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論V",
          number: ["BC50051"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:11,category1: "専門基礎科目", category2: "-", category3: "選択科目",
          group: "BC51(EDS,EDを除く)",
          number: ["BC51"], name: ["–"], group_min: 14, group_max: 14, group_sum: 0,
          category1_min: 18, category1_max: 18, category1_sum: 0, remove: ["English Discussion Seminar", "English Debate"], restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:12,category1: "専門基礎科目", category2: "-", category3: "選択科目",
          group: "EDS,ED",
          number: ["-"], name: ["English Discussion Seminar", "English Debate"], group_min: 4, group_max: 4, group_sum: 0,
          category1_min: 18, category1_max: 18, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:13,category1: "専門基礎科目", category2: "-", category3: "自由科目",
          group: "BC51,BE21",
          number: ["BC51", "BE21"], name: ["–"], group_min: 4, group_max: 10, group_sum: 0,
          category1_min: 4, category1_max: 10, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:14,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目I",
          number: ["11", "12"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:15,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目IIA",
          number: ["1A"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:16,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目IIB",
          number: ["1B"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:17,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目IIA,IIB,IIC",
          number: ["1A", "1B", "1C"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:18,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目III",
          number: ["1D", "1E", "1F", "1G"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:19,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "基礎体育",
          number: ["21", "25"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:20,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "応用体育",
          number: ["22"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:21,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "発展体育",
          number: ["23", "26"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:22,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "第一外国語",
          number: ["31A", "31B", "31C", "31E", "31F", "31G"],
          name: ["–"], group_min: 4.5, group_max: 4.5, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:23,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "第二外国語",
          number: ["32A", "32B", "32C", "32E", "3231", "3234", "33A", "33B", "33C", "33E", "3331", "3334", "34A", "34B", "34C", "34E", "3431", "3434", "35A", "35B", "35C", "35E", "3531", "3534", "36A", "36B", "36C", "36E", "3631", "3634", "37A", "37B", "37C", "37E", "3731", "3734", "38A", "38B", "38C", "38E", "3831", "3834"],
          name: ["–"], group_min: 4.5, group_max: 4.5, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:24,category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "情報",
          number: ["61", "62"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:25,category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "総合科目I,II",
          number: ["1"], name: ["–"], group_min: 0, group_max: 6, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:26,category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "体育",
          number: ["28"], name: ["–"], group_min: 0, group_max: 1, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:27,category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "外国語",
          number: ["3"], name: ["–"], group_min: 0, group_max: 6, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:28,category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "情報(上級)",
          number: ["63"], name: ["–"], group_min: 0, group_max: 4, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:29,category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "国語",
          number: ["5"], name: ["–"], group_min: 0, group_max: 2, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:30,category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "芸術",
          number: ["4"], name: ["–"], group_min: 0, group_max: 2, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:31,category1: "基礎科目", category2: "関連科目", category3: "自由科目",
          group: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number: ["BA", "A", "BB", "C", "E", "F", "G", "H", "W", "Y", "8", "99"], name: ["–"], group_min: 0, group_max: 23,
          group_sum: 0, category1_min: 0, category1_max: 23, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          YoukenNO:32,category1: "基礎科目", category2: "関連科目", category3: "自由科目",
          group: "教職に関する科目",
          number: ["90", "91", "92", "93", "94", "95", "96", "97", "98"], name: ["–"], group_min: 0, group_max: 12, group_sum: 0,
          category1_min: 0, category1_max: 23, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        { '専門科目': 0, '専門基礎科目': 0, '基礎科目': 0, '合計': 0 },

        { '必修科目': 33, '選択科目': 46, '自由科目': 45, '合計': 124 },

        { '必修科目': 33, '選択科目': 48, '自由科目': 45, '合計': 126 }],

      Result: [{ category1: "専門科目", category2: "-", category3: "必修科目", about: "卒業論文", 科目番号: "BC14908", 科目名: "卒業論文", 単位数: "6.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12131", 科目名: "北アフリカの経済と社会", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12561", 科目名: "宇宙開発", 単位数: "1.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12751", 科目名: "都市計画の思想史", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12031", 科目名: "統計科学", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12431", 科目名: "科学技術史", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12701", 科目名: "都市経済学", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12291", 科目名: "Social Anthropology(社会人類学)", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12444", 科目名: "Cプログラミング", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC13群", 科目番号: "BC13124", 科目名: "国際学ゼミナールII", 単位数: "3.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC13群", 科目番号: "BC13114", 科目名: "国際学ゼミナールI", 単位数: "3.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11431", 科目名: "国際金融論", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11851", 科目名: "安全保障論", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11881", 科目名: "ジャパニーズ・エコノミー", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC13311", 科目名: "独立論文", 単位数: "3.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11551", 科目名: "人類学特講", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11221", 科目名: "アジアの国際関係", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11411", 科目名: "国際貿易論", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11731", 科目名: "行政学I", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "必修科目", about: "国際学概論I", 科目番号: "BC50011", 科目名: "国際学概論I", 単位数: "1.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "必修科目", about: "国際学概論II", 科目番号: "BC50021", 科目名: "国際学概論II", 単位数: "1.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "必修科目", about: "国際学概論III", 科目番号: "BC50031", 科目名: "国際学概論III", 単位数: "1.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "必修科目", about: "国際学概論IV", 科目番号: "BC50041", 科目名: "国際学概論IV", 単位数: "1.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "必修科目", about: "国際学概論V", 科目番号: "BC50051", 科目名: "国際学概論V", 単位数: "1.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51081", 科目名: "マクロ経済学概論", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51071", 科目名: "国際経済論", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51091", 科目名: "グローバルコミュニケーション論", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51141", 科目名: "情報メディア概論", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51161", 科目名: "Media Politics", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51031", 科目名: "国際関係史序説", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "BC51(EDS,EDを除く)", 科目番号: "BC51061", 科目名: "初級ミクロ経済学", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "EDS,ED", 科目番号: "BC51541", 科目名: "English Discussion Seminar II", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "選択科目", about: "EDS,ED", 科目番号: "BC51581", 科目名: "English Debate", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "自由科目", about: "BC51,BE21", 科目番号: "BC51111", 科目名: "数理科学I", 単位数: "2.0" }
        , { category1: "専門基礎科目", category2: "-", category3: "自由科目", about: "BC51,BE21", 科目番号: "BC51124", 科目名: "数理科学II", 単位数: "2.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目I", 科目番号: "1226091", 科目名: "みんなで創ろう「つくばアクションプロジェクト」", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目I", 科目番号: "1105202", 科目名: "フレッシュマン・セミナー", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目IIA", 科目番号: "1A10121", 科目名: "新時代を拓く研究の最前線II", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目IIA", 科目番号: "1A10111", 科目名: "新時代を拓く研究の最前線I", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目IIB", 科目番号: "1B17041", 科目名: "経済学入門II", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目IIB", 科目番号: "1B01031", 科目名: "言語の万華鏡I", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目IIA,IIB,IIC", 科目番号: "1C24191", 科目名: "ストレスとうまくつき合おう", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "総合科目III", 科目番号: "1F20034", 科目名: "デジタルクリエイティブ基礎", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "基礎体育", 科目番号: "2123153", 科目名: "基礎体育ダンス(秋)", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "基礎体育", 科目番号: "2133143", 科目名: "基礎体育ニュースポーツ(春)", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "応用体育", 科目番号: "2213233", 科目名: "応用体育サッカー(秋)", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "応用体育", 科目番号: "2213223", 科目名: "応用体育サッカー(春)", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "発展体育", 科目番号: "2619293", 科目名: "スノースポーツ", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第一外国語", 科目番号: "31FB012", 科目名: "異文化と英語II", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第一外国語", 科目番号: "31GB012", 科目名: "総合英語II", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第一外国語", 科目番号: "31AB012", 科目名: "英語基礎I", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第一外国語", 科目番号: "31BB012", 科目名: "異文化と英語I", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第一外国語", 科目番号: "31CB012", 科目名: "総合英語I", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第二外国語", 科目番号: "3334082", 科目名: "ヨーロッパ文化圏の言語と文化IIBC(フランス語)", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第二外国語", 科目番号: "3331012", 科目名: "ヨーロッパ文化圏の言語と文化IIA(フランス語)", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第二外国語", 科目番号: "33CB212", 科目名: "フランス語基礎AII", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第二外国語", 科目番号: "33EB222", 科目名: "フランス語基礎BII", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第二外国語", 科目番号: "33AB212", 科目名: "フランス語基礎AI", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "第二外国語", 科目番号: "33BB222", 科目名: "フランス語基礎BI", 単位数: "0.5" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "情報", 科目番号: "6105101", 科目名: "情報(講義)", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "共通科目", category3: "必修科目", about: "情報", 科目番号: "6205203", 科目名: "情報(実習)", 単位数: "1.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC12群", 科目番号: "BC12521", 科目名: "水環境論", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC11,BC16,BE22群", 科目番号: "BC11791", 科目名: "ヨーロッパ社会経済史", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC11,BC16,BE22群", 科目番号: "BC16011", 科目名: "Mathematical Economics", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC11,BC16,BE22群", 科目番号: "BC11201", 科目名: "国際通商論", 単位数: "1.0" }
        , { category1: "専門科目", category2: "-", category3: "選択科目", about: "BC11,BC16,BE22群", 科目番号: "BC11751", 科目名: "公共経済学", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11801", 科目名: "現代社会論", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11891", 科目名: "Comparative Economics", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11981", 科目名: "経済数学", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11691", 科目名: "国際紛争論I", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11821", 科目名: "スポーツ文化論", 単位数: "2.0" }
        , { category1: "専門科目", category2: "-", category3: "自由科目", about: "BC11,BC12,BC13,BC16,BE22", 科目番号: "BC11971", 科目名: "基礎経済数学", 単位数: "2.0" }
        , { category1: "基礎科目", category2: "関連科目", category3: "自由科目", about: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目", 科目番号: "FH63051", 科目名: "会計学概論", 単位数: "2.0" }
        , { category1: "基礎科目", category2: "関連科目", category3: "自由科目", about: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目", 科目番号: "AB76351", 科目名: "観光地域論", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "関連科目", category3: "自由科目", about: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目", 科目番号: "8070101", 科目名: "グローバルトレンズ・日本I", 単位数: "1.0" }
        , { category1: "基礎科目", category2: "関連科目", category3: "自由科目", about: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目", 科目番号: "BB41061", 科目名: "現代経済史", 単位数: "2.0" }
        , { category1: "基礎科目", category2: "関連科目", category3: "自由科目", about: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目", 科目番号: "FH32021", 科目名: "経営組織論", 単位数: "2.0" }
        , { category1: "基礎科目", category2: "関連科目", category3: "自由科目", about: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目", 科目番号: "AA21721", 科目名: "グローバル人材養成講義XVIII", 単位数: "1.5" }]

    };
  }

  render() {
    return (
      <React.Fragment>
      {(this.state.Youken).map((e)=>(
        <React.Fragment>
         <div>{e.必修科目}</div>
         <div>{e.選択科目}</div>
         <div>{e.自由科目}</div>
         <div>{e.合計}</div>
       </React.Fragment>

      ))}
      {(Object.keys(this.state.Youken[33])).map((e)=>(
      <React.Fragment>
      <h1>{e}</h1>
      
      {(Object.keys(this.state.Youken[34])).map((t)=>(
       <React.Fragment>
       
        <h2>{t}</h2>
       
      {this.state.Youken.map((r)=>(
       <React.Fragment>

          {e==r.category1 && t==r.category3 && <h3>{r.group}</h3>}

          {this.state.Result.map((p)=>(
          
           e==r.category1 && t==r.category3 && e==p.category1 && t==p.category3 && r.group==p.about && <div> {p.科目名}</div>
      
           ))}

      </React.Fragment>
         
        ))}
     

        
      
        
      </React.Fragment>
      ))}
     
     </React.Fragment>
      ))}
      </React.Fragment>
    )
  }
}

render(<App />, document.getElementById('root'));
