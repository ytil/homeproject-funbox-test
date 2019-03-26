import React, { Component } from 'react'
import cat from '../assets/cat.png'

class Card extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    this.state = {
      stateName: this.props.initial,
      cardData: this.generateState(this.props.initial),
    }
  }

  get defaultCardDescription() {
    return (
      <>
        Чего сидишь Порадуй котэ,{' '}
        <span onClick={this.handleClick} className={'product__buy'}>
          купи.
        </span>
      </>
    )
  }

  get selectedCardDescription() {
    return <>{this.props.data.description}</>
  }

  get disabledCardDescription() {
    return <>Печалька, {this.props.data.taste} закончился.</>
  }

  generateState(state) {
    switch (state) {
      case 'default': {
        return {
          ...this.props.data,
          description: this.defaultCardDescription,
          classNamePostfix: 'default',
        }
      }
      case 'defaultHover': {
        return {
          ...this.props.data,
          description: this.defaultCardDescription,
          classNamePostfix: 'default-hover',
        }
      }
      case 'selected': {
        return {
          ...this.props.data,
          description: this.selectedCardDescription,
          classNamePostfix: 'selected',
        }
      }
      case 'selectedHover': {
        return {
          ...this.props.data,
          title: 'Котэ не одобряет?',
          description: this.selectedCardDescription,
          classNamePostfix: 'selected-hover',
        }
      }
      case 'disabled': {
        return {
          ...this.props.data,
          description: this.disabledCardDescription,
          classNamePostfix: 'disabled',
        }
      }
      default:
        return
    }
  }

  goToState(state) {
    this.setState({
      stateName: state,
      cardData: this.generateState(state),
    })
  }

  handleMouseEnter() {
    const prevState = this.state.stateName

    if (prevState === 'selected') {
      return this.goToState('selectedHover')
    } else if (prevState === 'default') {
      return this.goToState('defaultHover')
    }
  }

  handleMouseLeave() {
    const prevState = this.state.stateName

    if (prevState === 'selectedHover') {
      return this.goToState('selected')
    } else if (prevState === 'defaultHover') {
      return this.goToState('default')
    }
  }

  handleClick() {
    const prevState = this.state.stateName

    if (prevState === 'default' || prevState === 'defaultHover') {
      return this.goToState('selected')
    } else if (prevState === 'selected' || prevState === 'selectedHover') {
      return this.goToState('default')
    }
  }

  render() {
    const {
      title,
      brand,
      taste,
      quantityOfFeed,
      feedText,
      quantityOfBonus,
      bonusText,
      additionalInfo,
      totalWeight,
      description,
      classNamePostfix,
    } = this.state.cardData

    return (
      <li className={`product-list__item product`}>
        <div
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className={`product__inner card card--${classNamePostfix}`}
        >
          <span
            className={`product__title product__title--${classNamePostfix}`}
          >
            {title}
          </span>
          <br />
          <b className={'product__brand'}>{brand}</b>
          <br />
          <b className={'product__taste'}>{taste}</b>
          <br />
          <span className={'product__amount'}>
            <b>{quantityOfFeed}</b> <span>{feedText}</span>
          </span>
          <br />
          <span className={'product__bonus'}>
            <b>{quantityOfBonus}</b> <span>{bonusText}</span>
          </span>
          <br />
          <span className={'product__additional'}>{additionalInfo}</span>
          <br />
          <div className={'product__weight product__weight'}>
            <span className={'product__weight--total'}>{totalWeight}</span>
            <span className={'product__weight--kg'}>кг</span>
          </div>
          <img
            className={'product__image'}
            src={cat}
            alt={'Счастливый кот'}
            title={'Изображение кота'}
          />
        </div>

        <div
          className={`product__description product__description--${classNamePostfix}`}
        >
          {description}
        </div>
      </li>
    )
  }
}

export default Card
