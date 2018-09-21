export const switchPortIdentity = (name) => {
  switch (name) {
    case 'DEALER-D01':
        return ('10073')
    case 'DEALER-D02':
        return ('10083')
    case 'DEALER-D03':
        return ('10093')
    case 'CCP-P01':
        return ('10103')
    case 'CLIENT-C01':
        return ('10023')
    case 'CLIENT-C02':
        return ('10033')
    case 'CLIENT-C03':
        return ('10043')
    case 'CLIENT-C04':
        return ('10053')
    case 'CLIENT-C05':
        return ('10063')
    case 'BNO-DTN':
        return ('10013')
    default:
        break;
  }
}
