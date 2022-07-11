const dataCars = Array.from(document.querySelectorAll('.col-grid.cars .grid-item'));
const dataResults = Array.from(document.querySelectorAll('.col-grid.results .grid-item'));

const dataCarsIdArray = [];
const dataCarsNameArray = [];
const dataCarsCityArray = [];
const dataCarsArray = [];

const dataResultIdArray = [];
const dataResultArray = [];

const dataCarsObj = [];
const dataResultObj = [];

const getDataCars = () => {
    dataCars.forEach((item) => {
        if (item.dataset.id) {
            dataCarsIdArray.push(item.dataset.id);
        }

        if (item.dataset.name) {
            dataCarsNameArray.push(item.dataset.name);
        }

        if (item.dataset.city) {
            dataCarsCityArray.push(item.dataset.city);
        }

        if (item.dataset.car) {
            dataCarsArray.push(item.dataset.car);
        }
    });
};

const getDataResults = () => {
    dataResults.forEach((item) => {
        if (item.dataset.id) {
            dataResultIdArray.push(item.dataset.id);
        }

        if (item.dataset.result) {
            dataResultArray.push(item.dataset.result);
        }
    });
};

const generateDataCarsObj = () => {
    for (let i = 0; i < dataCarsIdArray.length; i++) {
        dataCarsObj.push(
            {
                id: dataCarsIdArray[i],
                name: dataCarsNameArray[i],
                city: dataCarsCityArray[i],
                car: dataCarsArray[i],
                result: 0,
                allResults: []
            }
        );
    };
};

const generateDataResultObj = () => {
    for (let i = 0; i < dataResultIdArray.length; i++) {
        dataResultObj.push(
            {
                id: dataResultIdArray[i],
                result: dataResultArray[i]
            }
        );
    };
};

const addTotalResults = () => {
    for (let i = 0; i < dataResultObj.length; i++) {
        for (let j = 0; j < dataCarsObj.length; j++) {
            if (dataCarsObj[j].id === dataResultObj[i].id) {
                dataCarsObj[j].result += Number(dataResultObj[i].result);
            }
        }
    }
};

const addAllResults = () => {
    for (let i = 0; i < dataResultObj.length; i++) {
        for (let j = 0; j < dataCarsObj.length; j++) {
            if (dataCarsObj[j].id === dataResultObj[i].id) {
                dataCarsObj[j].allResults.push(Number(dataResultObj[i].result));
            }
        }
    }
};

getDataCars();
getDataResults();
generateDataCarsObj();
generateDataResultObj();
addTotalResults();
addAllResults();

export {dataCarsObj, dataResultObj};
