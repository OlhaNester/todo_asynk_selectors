import React, { PureComponent } from "react";
import "./ColorPicker.css";
import classNames from "classnames";

class ColorPicker extends PureComponent {
  state = {
    activeOptInd: 0, //индекс массива
  };
  setActiveInd = (index) => {
    this.setState({ activeOptInd: index }); //метод получает индекс кнопки и кидает его в стэйт
  };

  makeClassesName = (index) => {
    return classNames("ColorPicker_option", {
      ColorPicker_option_active: index === this.state.activeOptInd, // установили npm install classnames
      //  заимпортировали import classNames from 'classnames';
      // в classNames(пишем все классы которые должны быть,
      //и потом объект в котором название класа и значение, которе меняется в зависимости от условия )
    });
    //    const Classes = ['ColorPicker_option'];
    //                     if (index === this.state.activeOptInd) {
    //                         Classes.push('ColorPicker_option_active');
    //     }
    //     return Classes.join(' ');
  };

  render() {
    const { activeOptInd } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptInd];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker_title">Color Picker</h2>
        <p> Выбран цвет: {label} </p>
        <div className="box">
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeClassesName(index)} //можно сделать инлайн className={classNames ('ColorPicker_option', {
              //'ColorPicker_option_active': index === activeOptInd})}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveInd(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
