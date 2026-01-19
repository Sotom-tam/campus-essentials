const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer-holder">
        <div className="footer">
    <p>Copyright @{year}</p>
        </div>
      
    </div>
  );
}
export default Footer