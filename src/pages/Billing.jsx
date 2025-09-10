import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function Billing() {
  const invoices = [
    { date: "March 01, 2020", id: "#MS-415646", amount: "$180" },
    { date: "Feb 10, 2021", id: "#RV-126749", amount: "$250" },
    { date: "April 05, 2020", id: "#FB-212562", amount: "$560" },
    { date: "June 25, 2019", id: "#QW-103578", amount: "$120" },
    { date: "March 01, 2019", id: "#AR-803481", amount: "$300" },
  ];

  const bills = [
    { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476" },
    { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476" },
    { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476" },
  ];

  const transactions = [
    { name: "Netflix", date: "27 March 2020, 12:30 PM", amount: "-$2500", color: "error.main" },
    { name: "Apple", date: "27 March 2020, 12:30 PM", amount: "+$2500", color: "success.main" },
    { name: "Stripe", date: "26 March 2020, 13:45 PM", amount: "+$800", color: "success.main" },
    { name: "HubSpot", date: "26 March 2020, 14:30 PM", amount: "+$1700", color: "success.main" },
    { name: "Webflow", date: "26 March 2020, 05:00 AM", amount: "Pending", color: "grey.400" },
    { name: "Microsoft", date: "25 March 2020, 16:30 PM", amount: "-$987", color: "error.main" },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-4 pt-4 mt-12 items-start">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        {/* Credit Card */}
        <Card sx={{ background: "linear-gradient(135deg, #1E1E6F, #3C3CCF)", color: "#fff", borderRadius: "20px" }}>
          <CardContent>
            <Typography variant="h6">Vision UI</Typography>
            <Box mt={3}>
              <Typography variant="h5">7812 2139 0823 XXXX</Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2">VALID THRU: 05/24</Typography>
                <Typography variant="body2">CVV: 09X</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Credit Balance */}
        <Card sx={{ background: "linear-gradient(135deg, #0A1D4C, #1A2A6C)", color: "#fff", borderRadius: "20px" }}>
          <CardContent>
            <Typography variant="h6">Credit Balance</Typography>
            <Typography variant="h4" mt={2}>
              $25,215
            </Typography>
            <Box mt={3}>
              <Typography variant="body2">Newest</Typography>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="body2">Bill & Taxes</Typography>
                <Typography variant="body2" color="error">
                  - $154.50
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card sx={{ background: "linear-gradient(135deg, #041d44, #062c77)", color: "#fff", borderRadius: "20px" }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
              <Typography variant="h6">Payment Method</Typography>
              <Button variant="contained" size="small" sx={{ borderRadius: "10px" }}>
                Add New Card
              </Button>
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} mt={3}>
              <Card sx={{ p: 2, flex: 1, borderRadius: "15px", backgroundColor: "#042154" }}>
                <Typography variant="body2">MasterCard</Typography>
                <Typography variant="h6">7812 2139 0823 XXXX</Typography>
              </Card>
              <Card sx={{ p: 2, flex: 1, borderRadius: "15px", backgroundColor: "#042154" }}>
                <Typography variant="body2">VISA</Typography>
                <Typography variant="h6">7812 2139 0823 XXXX</Typography>
              </Card>
            </Box>
          </CardContent>
        </Card>

        {/* Billing Info */}
        <Card sx={{ background: "linear-gradient(135deg, #041d44, #062c77)", color: "#fff", borderRadius: "20px" }}>
          <CardContent>
            <Typography variant="h6">Billing Information</Typography>
            {bills.map((bill, i) => (
              <Box key={i} p={2} mt={2} sx={{ background: "#0b285c", borderRadius: "15px" }}>
                <Typography variant="body2">{bill.name}</Typography>
                <Typography variant="body2">Company: {bill.company}</Typography>
                <Typography variant="body2">Email: {bill.email}</Typography>
                <Typography variant="body2">VAT: {bill.vat}</Typography>
                <Box display="flex" justifyContent="flex-end" gap={1} mt={1} flexWrap="wrap">
                  <Button size="small" color="error">
                    Delete
                  </Button>
                  <Button size="small">Edit</Button>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        {/* Invoices */}
        <Card
          sx={{
            background: "linear-gradient(135deg, #041d44, #062c77)",
            color: "#fff",
            borderRadius: "20px",
            height: { xs: "auto", md: "550px" }, // ✅ responsive height
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
              <Typography variant="h6">Invoices</Typography>
              <Button variant="contained" size="small" sx={{ borderRadius: "10px" }}>
                View All
              </Button>
            </Box>
            {invoices.map((inv, i) => (
              <Box key={i} display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
                <Box>
                  <Typography variant="body2">{inv.date}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {inv.id}
                  </Typography>
                </Box>
                <Typography variant="body2">{inv.amount}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Transactions */}
        <Card
          sx={{
            background: "linear-gradient(135deg, #041d44, #062c77)",
            color: "#fff",
            borderRadius: "20px",
            height: { xs: "auto", md: "600px" }, // ✅ responsive height
          }}
        >
          <CardContent>
            <Typography variant="h6">Your Transactions</Typography>
            {transactions.map((t, i) => (
              <Box key={i} display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
                <Box>
                  <Typography variant="body2">{t.name}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {t.date}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: t.color }}>
                  {t.amount}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
