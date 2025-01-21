import { log } from "console";
import markdownPdf from "markdown-pdf";
import path from "path";

export async function POST(req) {



  try {
    // Define the file path where the PDF should be saved
    const { markdown } = await req.json();
    const filePath = path.join(process.cwd(), "public", "markdown-output.pdf");
    console.log("Hello");
    // Call markdown-pdf to generate the PDF from the markdown content
    markdownPdf()
      .from.string(markdown)
      .to(filePath, function () {
        if (err) {
          console.error("Error generating PDF:", err);
          return new Response(
            JSON.stringify({ error: "Failed to generate PDF" }),
            { status: 500 }
          );
        } else {
          console.log("PDF generated successfully");
        }
      });

    return new Response(JSON.stringify({ url: "/markdown-output.pdf" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error during PDF generation:", error);
    return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
      status: 500,
    });
  }
}
