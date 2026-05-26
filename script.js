const openModalBtn = document.getElementById('openModalBtn');
const downloadModalBackdrop = document.getElementById('downloadModalBackdrop');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const downloadBtn = document.getElementById('downloadBtn');
const checks = document.querySelectorAll('.download-check');

const imageModalBackdrop = document.getElementById('imageModalBackdrop');
const imageModalTarget = document.getElementById('imageModalTarget');
const imageModalTitle = document.getElementById('imageModalTitle');
const closeImageModalBtn = document.getElementById('closeImageModalBtn');
const imageCards = document.querySelectorAll('.image-card');

function updateDownloadButton() {
  const hasSelected = Array.from(checks).some((check) => check.dataset.downloadable === 'true' && check.checked);
  downloadBtn.disabled = !hasSelected;
}

function openDownloadModal() {
  downloadModalBackdrop.classList.remove('hidden');
  updateDownloadButton();
}

function closeDownloadModal() {
  downloadModalBackdrop.classList.add('hidden');
}

function openImageModal(src, title) {
  imageModalTarget.src = src;
  imageModalTitle.textContent = title;
  imageModalBackdrop.classList.remove('hidden');
}

function closeImageModal() {
  imageModalBackdrop.classList.add('hidden');
  imageModalTarget.src = '';
}

openModalBtn.addEventListener('click', openDownloadModal);
closeModalBtn.addEventListener('click', closeDownloadModal);
cancelBtn.addEventListener('click', closeDownloadModal);

downloadModalBackdrop.addEventListener('click', (event) => {
  if (event.target === downloadModalBackdrop) closeDownloadModal();
});

checks.forEach((check) => check.addEventListener('change', updateDownloadButton));
updateDownloadButton();

const sampleStudentRows = [
  {
    teacher: "2c118f12-80ab-5c3a-95f7-bf6e681ae0ab",
    classId: "3D100000631_2025_10067103",
    className: "1학년 3반",
    studentUuid: "1cd05164-b49f-5113-88c3-ff600e89cc8a",
    problemCounts: {
      "2025-04": "-",
      "2025-05": "14",
      "2025-06": "-",
      "2025-07": "4",
      "2025-08": "9",
      "2025-09": "12",
      "2025-10": "6",
      "2025-11": "-",
      "2025-12": "-"
    },
    accuracyRates: {
      "2025-04": "-",
      "2025-05": "71.43",
      "2025-06": "-",
      "2025-07": "100.0",
      "2025-08": "44.44",
      "2025-09": "66.67",
      "2025-10": "16.67",
      "2025-11": "-",
      "2025-12": "-"
    },
    learningTimes: {
      "2025-04": "-",
      "2025-05": "00:01",
      "2025-06": "-",
      "2025-07": "-",
      "2025-08": "03:15",
      "2025-09": "00:42",
      "2025-10": "00:57",
      "2025-11": "-",
      "2025-12": "02:49"
    }
  },
  {
    teacher: "2c118f12-80ab-5c3a-95f7-bf6e681ae0ab",
    classId: "3D100000631_2025_10067103",
    className: "1학년 3반",
    studentUuid: "1dd52d97-424f-511a-8ac5-7bf16bc09e3b",
    problemCounts: {
      "2025-04": "-",
      "2025-05": "29",
      "2025-06": "22",
      "2025-07": "10",
      "2025-08": "22",
      "2025-09": "12",
      "2025-10": "12",
      "2025-11": "-",
      "2025-12": "-"
    },
    accuracyRates: {
      "2025-04": "-",
      "2025-05": "3.45",
      "2025-06": "9.09",
      "2025-07": "0.0",
      "2025-08": "18.18",
      "2025-09": "8.33",
      "2025-10": "33.33",
      "2025-11": "-",
      "2025-12": "-"
    },
    learningTimes: {
      "2025-04": "-",
      "2025-05": "00:25",
      "2025-06": "00:00",
      "2025-07": "03:12",
      "2025-08": "00:42",
      "2025-09": "01:03",
      "2025-10": "02:50",
      "2025-11": "-",
      "2025-12": "02:50"
    }
  },
  {
    teacher: "2c118f12-80ab-5c3a-95f7-bf6e681ae0ab",
    classId: "3D100000631_2025_10068104",
    className: "1학년 4반",
    studentUuid: "0f5b6da9-4ec6-5699-954b-3f480ecfac54",
    problemCounts: {
      "2025-04": "-",
      "2025-05": "25",
      "2025-06": "6",
      "2025-07": "11",
      "2025-08": "21",
      "2025-09": "6",
      "2025-10": "15",
      "2025-11": "16",
      "2025-12": "67"
    },
    accuracyRates: {
      "2025-04": "16.67",
      "2025-05": "28.0",
      "2025-06": "-",
      "2025-07": "9.09",
      "2025-08": "9.09",
      "2025-09": "0.0",
      "2025-10": "0.0",
      "2025-11": "0.0",
      "2025-12": "0.0"
    },
    learningTimes: {
      "2025-04": "00:01",
      "2025-05": "00:29",
      "2025-06": "-",
      "2025-07": "01:44",
      "2025-08": "00:44",
      "2025-09": "00:45",
      "2025-10": "01:24",
      "2025-11": "-",
      "2025-12": "02:28"
    }
  },
  {
    teacher: "2c118f12-80ab-5c3a-95f7-bf6e681ae0ab",
    classId: "3D100000631_2025_10068104",
    className: "1학년 4반",
    studentUuid: "0ab15493-e983-575f-898c-6329ec1c3296",
    problemCounts: {
      "2025-04": "-",
      "2025-05": "35",
      "2025-06": "-",
      "2025-07": "11",
      "2025-08": "9",
      "2025-09": "12",
      "2025-10": "12",
      "2025-11": "-",
      "2025-12": "-"
    },
    accuracyRates: {
      "2025-04": "-",
      "2025-05": "54.29",
      "2025-06": "-",
      "2025-07": "45.45",
      "2025-08": "11.11",
      "2025-09": "25.0",
      "2025-10": "0.0",
      "2025-11": "-",
      "2025-12": "-"
    },
    learningTimes: {
      "2025-04": "-",
      "2025-05": "00:46",
      "2025-06": "-",
      "2025-07": "00:52",
      "2025-08": "01:59",
      "2025-09": "00:32",
      "2025-10": "02:28",
      "2025-11": "-",
      "2025-12": "02:28"
    }
  }
];

function getSelectedClassNames() {
  return Array.from(checks)
    .filter((check) => check.dataset.downloadable === "true" && check.checked)
    .map((check) => check.closest("tr").querySelector("td:nth-child(2) b").textContent.trim());
}

function buildExcelRows(selectedClassNames) {
  const targetRows = sampleStudentRows.filter((row) =>
    selectedClassNames.includes(row.className)
  );

  const months = [
    "2025-04",
    "2025-05",
    "2025-06",
    "2025-07",
    "2025-08",
    "2025-09",
    "2025-10",
    "2025-11",
    "2025-12"
  ];

  const headerRow1 = [
    "교사",
    "클래스ID",
    "학생",
    "문제 풀이 수",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "평균 정답률",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "학습 시간(시:분)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  const headerRow2 = [
    "",
    "",
    "UUID",
    ...months,
    ...months,
    ...months
  ];

  const bodyRows = targetRows.map((row, index) => [
    index === 0 ? row.teacher : "",
    row.classId,
    row.studentUuid,
    ...months.map((month) => row.problemCounts[month] ?? "-"),
    ...months.map((month) => row.accuracyRates[month] ?? "-"),
    ...months.map((month) => row.learningTimes[month] ?? "-")
  ]);

  return [headerRow1, headerRow2, ...bodyRows];
}

function downloadLearningDataExcel() {
  const selectedClassNames = getSelectedClassNames();

  if (selectedClassNames.length === 0) {
    alert("다운로드할 반을 선택해 주세요.");
    return;
  }

  const excelRows = buildExcelRows(selectedClassNames);

  const worksheet = XLSX.utils.aoa_to_sheet(excelRows);

  worksheet["!merges"] = [
    { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } },
    { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } },
    { s: { r: 0, c: 2 }, e: { r: 0, c: 2 } },
    { s: { r: 0, c: 3 }, e: { r: 0, c: 11 } },
    { s: { r: 0, c: 12 }, e: { r: 0, c: 20 } },
    { s: { r: 0, c: 21 }, e: { r: 0, c: 29 } }
  ];

  worksheet["!cols"] = [
    { wch: 38 },
    { wch: 28 },
    { wch: 42 },
    ...Array(27).fill({ wch: 10 })
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "학급 데이터");

  const today = new Date();
  const yyyymmdd = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("");

  const fileName = `AIDT_학급 데이터_${selectedClassNames.join("_")}_${yyyymmdd}.xlsx`;

  XLSX.writeFile(workbook, fileName);
}

downloadBtn.addEventListener("click", downloadLearningDataExcel);

imageCards.forEach((card) => {
  card.addEventListener('click', () => {
    openImageModal(card.dataset.imageSrc, card.dataset.imageTitle || '참고 이미지');
  });
});

closeImageModalBtn.addEventListener('click', closeImageModal);
imageModalBackdrop.addEventListener('click', (event) => {
  if (event.target === imageModalBackdrop) closeImageModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!downloadModalBackdrop.classList.contains('hidden')) closeDownloadModal();
    if (!imageModalBackdrop.classList.contains('hidden')) closeImageModal();
  }
});
