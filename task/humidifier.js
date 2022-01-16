/* Для простоты будем считать, 
что пользователь всегда наливает полный бак воды */

const log = console.log;

class Humidifier {
  //Сущность с набором характеристик
  constructor(characteristics) {
    this.model = characteristics.model
    this.color = characteristics.color
    this._maxWaterAmount = characteristics.maxWaterAmount
  }

  //Внутренний интерфейс
  _maxIntensity = 100;
  _maxWaterLevel = 0;
  _intensity = 0;
  _lastCalculatedWaterLevel = 0;
  _waterSensor = true; // Boolean(value); // Значение Value приходит от сенсора, его логика работы нам неизвестна.
  
  //Сигнал предупреждения о низком уровне воды.
  _notifyAboutMinWaterAmount() {
    return log(`Осталось мало воды`); //
  }

  //Таймер который считает сколько воды испарилось.
  startTimer(timeInSeconds) {
    let startTime = 0;
    let finishTime = timeInSeconds * 1000;

    let timerId = setInterval(function() {
      log(this._lastCalculatedWaterLevel);
      if (finishTime === startTime) { // Запускаем таймер        
        if (this._lastCalculatedWaterLevel >= (this._maxWaterLevel - 200)) { //Если испарили воды столько, что в баке осталось <= 200мл воды, посылаем сигнал.
          this._notifyAboutMinWaterAmount;
        } else if (!this._waterSensor) { //Если продолжаем испарять воду и сенсор сообщит что воды не осталось для безопасности выключаем увлажнитель.
          this.setOff;
          clearInterval(timerId);
        }
        log(`Испарили ${this._lastCalculatedWaterLevel}мл воды`)
      }
      this._lastCalculatedWaterLevel += (this._intensity / 2);
      finishTime -= 1000;
      return '123';
    }, 1000);
  }

  //Включение увлажнителя
  setOn(intensity) {
    if (!this._waterSensor) return log(`Нет воды`);
    this._intensity = intensity;
    return log(`Увлажнитель включён`);
  }

  //Внешний интерфейс (крутилка вкл/установка интенсивности/выкл)
  //Выключение увлажнителя
  setOff() {
    this._intensity = 0;
    this._lastCalculatedWaterLevel = 0;
    return log(`Увлажнитель выключен`);
  }
  
  //Показываем уровень интенсивности увлажнения
  get intensity() {
    if (this._intensity === this._maxIntensity) {
      return log(`Установлена максимальная интенсивность`);
    }
    return log(`Установлен режим ${this._intensity}% влажности`);
  }

  //Устанавливает уровень интенсивности увлажнения
  set intensity(value) {
    if (value >= this._maxIntensity) {
      this._intensity = this._maxIntensity;
      return log(`Установлена максимальная интенсивность`);
    } else if (value <= 0) {
      this.setOff();
      return;
    }
    this._intensity = value;
    return log(`Установлен режим ${this._intensity}% влажности`);
  }
}

const someHumidifier = new Humidifier({model: 'model', color: 'color', maxWaterAmount: 5000});
someHumidifier.setOn(20);
someHumidifier.startTimer(5);